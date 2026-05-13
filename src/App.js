import React, { useState } from 'react';
import './App.css';

function App() {
  const [status, setStatus] = useState('대기 중');
  const [loading, setLoading] = useState(false);

  const startAnalysis = () => {
    setLoading(true);
    setStatus('AI 에이전트가 데이터를 분석 중입니다...');
    
    // 2초 뒤 분석 완료 시뮬레이션
    setTimeout(() => {
      setStatus('분석 완료: 오늘의 트렌드는 "AI 오토메이션"입니다.');
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="ai-status">● {status}</div>
        <h1>AI Nexus Agent</h1>
        <p>당신의 비즈니스 데이터를 실시간으로 분석합니다.</p>
        <button onClick={startAnalysis} disabled={loading}>
          {loading ? '분석 중...' : '트렌드 분석 시작'}
        </button>
      </div>
    </div>
  );
}

export default App;