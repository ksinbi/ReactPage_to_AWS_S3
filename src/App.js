import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [status, setStatus] = useState('IDLE'); // IDLE, SCANNING, DONE
  const [trendIndex, setTrendIndex] = useState(0);
  
  const trends = [
    { title: "AI Agentic Workflow", desc: "단순 응답을 넘어 스스로 계획하고 실행하는 AI 시스템" },
    { title: "Edge Computing AI", desc: "온디바이스 환경에서 초고속으로 작동하는 로컬 AI 모델" },
    { title: "Multimodal Search", desc: "이미지, 음성, 영상을 동시에 이해하는 차세대 검색 기술" }
  ];

  const startAnalysis = () => {
    setStatus('SCANNING');
    // 3초간 분석하는 척 시뮬레이션
    setTimeout(() => {
      setStatus('DONE');
      setTrendIndex(Math.floor(Math.random() * trends.length));
    }, 3000);
  };

  const reset = () => setStatus('IDLE');

  return (
    <div className="container">
      {/* 배경 장식용 빛무리 */}
      <div className="blob"></div>

      <div className={`card ${status}`}>
        {status === 'IDLE' && (
          <div className="content fade-in">
            <div className="badge">SYSTEM READY</div>
            <h1>AI Nexus Insights</h1>
            <p>전 세계 실시간 기술 트렌드를 분석할 준비가 되었습니다.</p>
            <button className="main-btn" onClick={startAnalysis}>분석 엔진 가동</button>
          </div>
        )}

        {status === 'SCANNING' && (
          <div className="content">
            <div className="scanner-line"></div>
            <h2 className="scanning-text">DATA SCANNING...</h2>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <p className="loading-sub">실시간 소셜 및 뉴스 피드 분석 중</p>
          </div>
        )}

        {status === 'DONE' && (
          <div className="content slide-up">
            <div className="badge success">ANALYSIS COMPLETE</div>
            <h3 className="trend-label">오늘의 핵심 트렌드</h3>
            <h1 className="trend-title">{trends[trendIndex].title}</h1>
            <div className="divider"></div>
            <p className="trend-desc">{trends[trendIndex].desc}</p>
            <button className="reset-btn" onClick={reset}>다시 분석하기</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
