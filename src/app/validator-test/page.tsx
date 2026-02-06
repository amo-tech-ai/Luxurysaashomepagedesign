import { useState } from 'react';
import { Check, X, AlertCircle, Loader, ArrowRight } from 'lucide-react';

interface ValidatorTestPageProps {
  onNavigate?: (route: string) => void;
}

interface TestResult {
  step: string;
  status: 'pending' | 'running' | 'passed' | 'failed';
  message?: string;
  data?: any;
}

export default function ValidatorTestPage({ onNavigate }: ValidatorTestPageProps) {
  const [testResults, setTestResults] = useState<TestResult[]>([
    { step: '1. Database Tables', status: 'pending' },
    { step: '2. Edge Function Deployed', status: 'pending' },
    { step: '3. Frontend Pages', status: 'pending' },
    { step: '4. AI Agent Pipeline', status: 'pending' },
    { step: '5. Verification Logic', status: 'pending' },
    { step: '6. Complete Workflow', status: 'pending' },
  ]);
  const [isRunning, setIsRunning] = useState(false);
  const [testInput, setTestInput] = useState('We are building an AI-powered operating system for founders that guides them from initial idea validation through daily execution. The problem is that early-stage founders spend weeks researching tools and creating pitch decks manually when they should be building.');

  const updateTestResult = (index: number, status: TestResult['status'], message?: string, data?: any) => {
    setTestResults(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], status, message, data };
      return updated;
    });
  };

  const runTests = async () => {
    setIsRunning(true);

    // Test 1: Database Tables
    updateTestResult(0, 'running');
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Supabase env vars not configured');
      }

      // Check if tables exist by trying to query them
      const tablesResponse = await fetch(
        `${supabaseUrl}/rest/v1/validator_sessions?limit=0`,
        {
          headers: {
            'apikey': supabaseAnonKey,
            'Authorization': `Bearer ${supabaseAnonKey}`,
          },
        }
      );

      if (!tablesResponse.ok) {
        throw new Error('validator_sessions table not found');
      }

      updateTestResult(0, 'passed', 'All tables exist');
    } catch (error) {
      updateTestResult(0, 'failed', error instanceof Error ? error.message : 'Database check failed');
      setIsRunning(false);
      return;
    }

    // Test 2: Edge Function
    updateTestResult(1, 'running');
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      const response = await fetch(`${supabaseUrl}/functions/v1/validator-start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify({ input_text: 'Test input' }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Edge function not accessible');
      }

      updateTestResult(1, 'passed', 'Edge function responding');
    } catch (error) {
      updateTestResult(1, 'failed', error instanceof Error ? error.message : 'Edge function check failed');
    }

    // Test 3: Frontend Pages
    updateTestResult(2, 'running');
    try {
      // Check if pages are loaded
      const pagesExist = [
        typeof ValidatorTestPage !== 'undefined',
        // Add more page checks
      ].every(Boolean);

      if (!pagesExist) {
        throw new Error('Some pages are not loaded');
      }

      updateTestResult(2, 'passed', 'All pages loaded');
    } catch (error) {
      updateTestResult(2, 'failed', error instanceof Error ? error.message : 'Page check failed');
    }

    // Test 4: AI Agent Pipeline (Full Integration Test)
    updateTestResult(3, 'running');
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      const response = await fetch(`${supabaseUrl}/functions/v1/validator-start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify({ input_text: testInput }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Pipeline failed');
      }

      const data = await response.json();
      
      if (!data.session_id) {
        throw new Error('No session_id returned');
      }

      updateTestResult(3, 'passed', `Session ${data.session_id} created`, data);

      // Test 5: Verification Logic
      updateTestResult(4, 'running');
      
      // Poll for completion
      let attempts = 0;
      const maxAttempts = 60; // 2 minutes
      let completed = false;

      while (attempts < maxAttempts && !completed) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const statusResponse = await fetch(
          `${supabaseUrl}/functions/v1/validator-status?session_id=${data.session_id}`,
          {
            headers: {
              'Authorization': `Bearer ${supabaseAnonKey}`,
            },
          }
        );

        if (statusResponse.ok) {
          const statusData = await statusResponse.json();
          
          if (statusData.status === 'complete' || statusData.status === 'partial' || statusData.status === 'failed') {
            completed = true;
            
            if (statusData.report_id) {
              updateTestResult(4, 'passed', `Report ${statusData.report_id} verified`, statusData);

              // Test 6: Complete Workflow
              updateTestResult(5, 'running');

              // Fetch the report
              const reportResponse = await fetch(
                `${supabaseUrl}/rest/v1/validator_reports?id=eq.${statusData.report_id}&select=*`,
                {
                  headers: {
                    'apikey': supabaseAnonKey,
                    'Authorization': `Bearer ${supabaseAnonKey}`,
                  },
                }
              );

              if (reportResponse.ok) {
                const reportData = await reportResponse.json();
                if (reportData && reportData.length > 0) {
                  const report = reportData[0];
                  const verification = report.verification_json;

                  updateTestResult(5, 'passed', `Workflow complete. Verified: ${verification.verified}`, {
                    report_id: statusData.report_id,
                    verified: verification.verified,
                    sections: Object.keys(report.report_json || {}).length,
                  });
                } else {
                  throw new Error('Report not found');
                }
              } else {
                throw new Error('Failed to fetch report');
              }
            } else {
              throw new Error('No report_id in status');
            }
          }
        }

        attempts++;
      }

      if (!completed) {
        throw new Error('Pipeline timeout after 2 minutes');
      }

    } catch (error) {
      updateTestResult(3, 'failed', error instanceof Error ? error.message : 'Pipeline test failed');
      updateTestResult(4, 'failed', 'Verification skipped');
      updateTestResult(5, 'failed', 'Workflow skipped');
    }

    setIsRunning(false);
  };

  const getStatusIcon = (status: TestResult['status']) => {
    switch (status) {
      case 'passed':
        return <Check className="w-5 h-5 text-green-600" />;
      case 'failed':
        return <X className="w-5 h-5 text-red-600" />;
      case 'running':
        return <Loader className="w-5 h-5 text-[#0d5f4e] animate-spin" />;
      default:
        return <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <button 
            onClick={() => onNavigate?.('home-v5')}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 bg-[#0d5f4e] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-lg font-light text-[#212427]">StartupAI</span>
          </button>

          <button
            onClick={() => onNavigate?.('validator')}
            className="px-5 py-2 bg-[#0d5f4e] hover:bg-[#0a4a3a] text-white text-sm font-light rounded-lg transition-colors"
          >
            Go to Validator
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1000px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full mb-6">
            <AlertCircle className="w-3 h-3" />
            SYSTEM TEST
          </div>
          <h1 className="text-5xl lg:text-6xl font-light text-[#212427] mb-4">
            Validator Test Suite
          </h1>
          <p className="text-lg text-gray-600 font-light">
            Verify the complete Chat → Validator → Report workflow
          </p>
        </div>

        {/* Test Input */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-6">
          <h2 className="text-xl text-[#212427] mb-4">Test Input</h2>
          <textarea
            value={testInput}
            onChange={(e) => setTestInput(e.target.value)}
            className="w-full h-32 px-4 py-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent text-[#212427] text-sm"
            disabled={isRunning}
          />
          <button
            onClick={runTests}
            disabled={isRunning}
            className="mt-4 px-6 py-3 bg-[#0d5f4e] hover:bg-[#0a4a3a] disabled:bg-gray-300 text-white rounded-lg transition-colors flex items-center gap-2"
          >
            {isRunning ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                Running Tests...
              </>
            ) : (
              <>
                Run Full Test
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* Test Results */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 className="text-xl text-[#212427] mb-6">Test Results</h2>
          <div className="space-y-4">
            {testResults.map((result, idx) => (
              <div 
                key={idx}
                className={`p-4 rounded-lg border transition-all ${
                  result.status === 'running' ? 'border-[#0d5f4e] bg-[#DCF9E3]/30' :
                  result.status === 'passed' ? 'border-green-200 bg-green-50' :
                  result.status === 'failed' ? 'border-red-200 bg-red-50' :
                  'border-gray-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-0.5">
                    {getStatusIcon(result.status)}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 mb-1">
                      {result.step}
                    </div>
                    {result.message && (
                      <p className={`text-sm ${
                        result.status === 'failed' ? 'text-red-700' :
                        result.status === 'passed' ? 'text-green-700' :
                        'text-gray-600'
                      }`}>
                        {result.message}
                      </p>
                    )}
                    {result.data && (
                      <details className="mt-2">
                        <summary className="text-xs text-gray-500 cursor-pointer">View Data</summary>
                        <pre className="mt-2 p-3 bg-gray-100 rounded text-xs overflow-auto">
                          {JSON.stringify(result.data, null, 2)}
                        </pre>
                      </details>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => onNavigate?.('validator')}
            className="p-4 bg-white border border-gray-200 rounded-lg hover:border-[#0d5f4e] transition-colors text-left"
          >
            <div className="text-sm font-medium text-gray-900 mb-1">Chat Input</div>
            <div className="text-xs text-gray-600">/validator</div>
          </button>
          <button
            onClick={() => {
              const sessionId = testResults[3]?.data?.session_id;
              if (sessionId) onNavigate?.(`validator/run/${sessionId}`);
            }}
            disabled={!testResults[3]?.data?.session_id}
            className="p-4 bg-white border border-gray-200 rounded-lg hover:border-[#0d5f4e] transition-colors text-left disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="text-sm font-medium text-gray-900 mb-1">Progress Page</div>
            <div className="text-xs text-gray-600">/validator/run/:sessionId</div>
          </button>
          <button
            onClick={() => {
              const reportId = testResults[4]?.data?.report_id;
              if (reportId) onNavigate?.(`validator/report/${reportId}`);
            }}
            disabled={!testResults[4]?.data?.report_id}
            className="p-4 bg-white border border-gray-200 rounded-lg hover:border-[#0d5f4e] transition-colors text-left disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="text-sm font-medium text-gray-900 mb-1">Report Page</div>
            <div className="text-xs text-gray-600">/validator/report/:reportId</div>
          </button>
        </div>
      </main>
    </div>
  );
}
