import React, { useState } from 'react';
import { FaTerminal, FaCalendarAlt, FaBroadcastTower, FaDiscord, FaBolt, FaCircle } from 'react-icons/fa';
import './SpikeSyncWidget.css';

const SpikeSyncWidget = () => {
  const [activeTab, setActiveTab] = useState('embed'); // 'embed' | 'live' | 'logs'
  const [isAlertSent, setIsAlertSent] = useState(false);

  const handleSimulateAlert = () => {
    setIsAlertSent(true);
    setTimeout(() => setIsAlertSent(false), 3000);
  };

  return (
    <div className="spikesync-widget" aria-label="SpikeSync Live Telemetry Demo">
      {/* Top Telemetry Header */}
      <div className="widget-topbar">
        <div className="topbar-left font-mono">
          <FaDiscord className="discord-icon" aria-hidden="true" />
          <span className="server-label">OFFICIAL VALORANT DISCORD</span>
          <span className="member-count">[2.3M+ MEMBERS]</span>
        </div>
        <div className="topbar-right font-mono">
          <span className="status-live">
            <FaCircle className="status-dot" aria-hidden="true" />
            BOT ONLINE
          </span>
          <span className="shard-info">SHARDS: 4/4</span>
          <span className="ping-info">9ms</span>
        </div>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="widget-tabs" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'embed'}
          className={`widget-tab font-mono ${activeTab === 'embed' ? 'active' : ''}`}
          onClick={() => setActiveTab('embed')}
        >
          <FaCalendarAlt aria-hidden="true" />
          <span>Esports Schedule Embed</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'live'}
          className={`widget-tab font-mono ${activeTab === 'live' ? 'active' : ''}`}
          onClick={() => setActiveTab('live')}
        >
          <FaBroadcastTower aria-hidden="true" />
          <span>Live Match Telemetry</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'logs'}
          className={`widget-tab font-mono ${activeTab === 'logs' ? 'active' : ''}`}
          onClick={() => setActiveTab('logs')}
        >
          <FaTerminal aria-hidden="true" />
          <span>Backend Sync Logs</span>
        </button>
      </div>

      {/* Tab Panels */}
      <div className="widget-viewport">
        {activeTab === 'embed' && (
          <div className="embed-panel" role="tabpanel">
            <div className="discord-message">
              <div className="bot-avatar font-mono">SS</div>
              <div className="message-content">
                <div className="message-header">
                  <span className="bot-name font-mono">SpikeSync</span>
                  <span className="bot-tag font-mono">BOT</span>
                  <span className="post-time font-mono">Today at 18:00 UTC · In #esports-announcements</span>
                </div>

                {/* Discord Embed Container */}
                <div className="discord-embed">
                  <div className="embed-border" />
                  <div className="embed-inner">
                    <div className="embed-kicker font-mono">VCT MASTERS // UPPER BRACKET SEMIFINALS</div>
                    <div className="embed-title">SENTINELS vs PAPER REX</div>
                    <p className="embed-desc">
                      Official broadcast synchronization active. Match starts in <strong>45 minutes</strong> on Main Stream A.
                    </p>

                    <div className="embed-grid font-mono">
                      <div className="grid-cell">
                        <span className="cell-label">TOURNAMENT</span>
                        <span className="cell-val">VCT Champions Tour 2026</span>
                      </div>
                      <div className="grid-cell">
                        <span className="cell-label">FORMAT</span>
                        <span className="cell-val">Best of 3 (LAN)</span>
                      </div>
                      <div className="grid-cell">
                        <span className="cell-label">SCHEDULED TIME</span>
                        <span className="cell-val">18:00 UTC (Synced)</span>
                      </div>
                      <div className="grid-cell">
                        <span className="cell-label">BROADCAST AUDIENCE</span>
                        <span className="cell-val highlight">2,340,000+ members</span>
                      </div>
                    </div>

                    <div className="embed-footer font-mono">
                      <span>Telemetry source: Riot Esports API & Scraper Feed</span>
                      <span>·</span>
                      <span>SQLite cached (0.3ms)</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Simulation Button */}
                <div className="interactive-bar">
                  <button
                    type="button"
                    className="simulate-btn font-mono"
                    onClick={handleSimulateAlert}
                  >
                    <FaBolt aria-hidden="true" />
                    <span>{isAlertSent ? "Broadcast Dispatched to 2.3M Users!" : "Simulate Live Schedule Dispatch"}</span>
                  </button>
                  {isAlertSent && (
                    <span className="dispatch-toast font-mono">
                      ✓ Rate-limit safe: 49/50 remaining · 0 dropped packets
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'live' && (
          <div className="live-panel" role="tabpanel">
            <div className="live-status-header">
              <div className="matchup-tag font-mono">VCT MASTERS // DECIDER MAP 3</div>
              <div className="live-badge font-mono">
                <span className="pulse-red" aria-hidden="true" />
                LIVE TELEMETRY
              </div>
            </div>

            <div className="match-scoreboard">
              <div className="team-box">
                <span className="team-code font-mono">SEN</span>
                <span className="team-name">Sentinels</span>
                <span className="map-score font-mono">1</span>
              </div>
              <div className="vs-divider font-mono">VS</div>
              <div className="team-box">
                <span className="team-code font-mono">PRX</span>
                <span className="team-name">Paper Rex</span>
                <span className="map-score font-mono">1</span>
              </div>
            </div>

            <div className="map-breakdown font-mono">
              <div className="map-card completed">
                <span className="map-name">MAP 1: BIND</span>
                <span className="map-result">13 - 11 (SEN)</span>
              </div>
              <div className="map-card completed">
                <span className="map-name">MAP 2: ASCENT</span>
                <span className="map-result">9 - 13 (PRX)</span>
              </div>
              <div className="map-card active-map">
                <span className="map-name">MAP 3: HAVEN</span>
                <span className="map-result live-score">8 - 7 (Round 16 Live)</span>
              </div>
            </div>

            <div className="telemetry-meta font-mono">
              <span>SYNC RATE: 15s POLLING + WEBSOCKET FAILOVER</span>
              <span>PARSED WITH ZOD</span>
              <span>ZERO GATEWAY VIOLATIONS</span>
            </div>
          </div>
        )}

        {activeTab === 'logs' && (
          <div className="logs-panel font-mono" role="tabpanel">
            <div className="log-line">
              <span className="log-time">[05:14:02.110]</span>
              <span className="log-tag tag-ingest">[INGEST]</span>
              <span className="log-msg">Polled Riot VCT tournament schedule feed → 200 OK (214ms)</span>
            </div>
            <div className="log-line">
              <span className="log-time">[05:14:02.112]</span>
              <span className="log-tag tag-zod">[VALIDATE]</span>
              <span className="log-msg">Zod schema validation passed (14 bracket nodes, 0 schema errors, 0.28ms)</span>
            </div>
            <div className="log-line">
              <span className="log-time">[05:14:02.115]</span>
              <span className="log-tag tag-sqlite">[PERSIST]</span>
              <span className="log-msg">SQLite upsert via Drizzle ORM: 8 matches updated (0.61ms latency)</span>
            </div>
            <div className="log-line">
              <span className="log-time">[05:14:02.118]</span>
              <span className="log-tag tag-cache">[CACHE]</span>
              <span className="log-msg">In-memory TTL cache refreshed (key: 'vct_semis_bracket', ttl: 120s)</span>
            </div>
            <div className="log-line">
              <span className="log-time">[05:14:02.121]</span>
              <span className="log-tag tag-rate">[BUCKET]</span>
              <span className="log-msg">Token bucket consumption: 1 token used · 49/50 tokens available</span>
            </div>
            <div className="log-line highlight-log">
              <span className="log-time">[05:14:02.124]</span>
              <span className="log-tag tag-dispatch">[DISPATCH]</span>
              <span className="log-msg">Broadcast payload delivered to official VALORANT Discord (#esports, 2.3M reach)</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpikeSyncWidget;
