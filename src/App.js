import React, { useState } from 'react';
import './App.css';

function App() {
  const [status, setStatus] = useState('IDLE'); // IDLE, SCANNING, DONE
  const [trend, setTrend] = useState({ title: "", desc: "" });

  const trends = [
    { title: "Agentic AI", desc: "사용자의 개입 없이 스스로 목표를 세우고 실행하는 자율형 AI" },
    { title: "Spatial Computing", desc: "디지털 콘텐츠와 물리적 세계를 완벽하게 결합하는 공간 연산 기술" },
    { title: "Green Software", desc: "탄소 배출을 최소화하도록 설계된 지속 가능한 친환경 소프트웨어" }
  ];

  const handleStart = () => {
    setStatus('SCANNING');
    setTimeout(() => {
      const randomTrend = trends[Math.floor(Math.random() * trends.length)];
      setTrend(randomTrend);
      setStatus('DONE');
    }, 3000); // 3초간 스캔 애니메이션
  };

  return (
    <div className="container">
      <div className="background-glow"></div>
      
      <div className={`card ${status}`}>
        {status === 'IDLE' && (
          <div className="content fade-in">
            <div className="tag">SYSTEM ACTIVE</div>
            <h1>AI Trend Scanner</h1>
            <p>현재 가장 주목받는 기술 트렌드를 분석합니다.</p>
            <button className="btn-primary" onClick={handleStart}>분석 시작</button>
          </div>
        )}

        {status === 'SCANNING' && (
          <div className="content">
            <div className="scanner">
              <div className="scan-line"></div>
            </div>
            <h2 className="pulse">분석 중...</h2>
            <div className="progress-container">
              <div className="progress-bar"></div>
            </div>
          </div>
        )}

        {status === 'DONE' && (
          <div className="content slide-up">
            <div className="tag success">ANALYSIS COMPLETE</div>
            <span className="label">TODAY'S PICK</span>
            <h1 className="result-title">{trend.title}</h1>
            <p className="result-desc">{trend.desc}</p>
            <button className="btn-secondary" onClick={() => setStatus('IDLE')}>다시 시도</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
