import React, { useState } from 'react';
import { FaCalendarAlt, FaShieldAlt, FaEyeSlash, FaDiscord, FaBolt, FaSyncAlt } from 'react-icons/fa';
import './SpikeSyncWidget.css';

const SpikeSyncWidget = () => {
  const [activeTab, setActiveTab] = useState('embed'); // 'embed' | 'pipeline' | 'spoilers'
  const [inPlaceEdited, setInPlaceEdited] = useState(false);
  const [revealedSpoilers, setRevealedSpoilers] = useState(false);

  return (
    <div className="spikesync-widget" aria-label="SpikeSync Architecture & Real-World Interface">
      {/* Top Telemetry Header */}
      <div className="widget-topbar font-mono">
        <div className="topbar-left">
          <FaDiscord className="discord-brand-icon" aria-hidden="true" />
          <span className="server-label">OFFICIAL VALORANT DISCORD (2.3M+)</span>
          <span className="source-tag">VLR.gg SYNC ENGINE</span>
        </div>
        <div className="topbar-right">
          <span className="status-live">
            <span className="status-dot" aria-hidden="true" />
            SAPPHIRE / DISCORD.JS v14
          </span>
          <span className="tech-badge">SQLITE / DRIZZLE</span>
          <span className="tech-badge">p-queue (1.5s)</span>
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
          <span>Discord Match Embed & Emojis</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'pipeline'}
          className={`widget-tab font-mono ${activeTab === 'pipeline' ? 'active' : ''}`}
          onClick={() => setActiveTab('pipeline')}
        >
          <FaShieldAlt aria-hidden="true" />
          <span>Polite Scraping & LRU Emoji Cache</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'spoilers'}
          className={`widget-tab font-mono ${activeTab === 'spoilers' ? 'active' : ''}`}
          onClick={() => setActiveTab('spoilers')}
        >
          <FaEyeSlash aria-hidden="true" />
          <span>Spoiler Protection & Slash Engine</span>
        </button>
      </div>

      {/* Viewport Content */}
      <div className="widget-viewport">
        {/* TAB 1: Discord Match Embed & Emojis */}
        {activeTab === 'embed' && (
          <div className="embed-panel" role="tabpanel">
            <div className="discord-msg-layout">
              <div className="bot-avatar font-mono">SS</div>
              <div className="discord-msg-body">
                <div className="discord-meta font-mono">
                  <span className="author-name">SpikeSync</span>
                  <span className="app-badge">BOT</span>
                  <span className="msg-time">
                    {inPlaceEdited ? 'Edited in-place (15-min sync)' : 'Today at 18:00 UTC'} · in #esports-announcements
                  </span>
                </div>

                {/* The Embed */}
                <div className="discord-embed vct-champions">
                  <div className="embed-color-bar champions-bar" />
                  <div className="embed-body">
                    <div className="embed-event-header font-mono">
                      <span className="event-title">Valorant Champions 2026</span>
                      <span className="event-stage">Upper Bracket Final</span>
                    </div>

                    <div className="embed-versus">
                      <span className="team-emoji font-mono">[SEN]</span>
                      <span className="team-text">Sentinels</span>
                      <span className="vs-sep font-mono">vs</span>
                      <span className="team-text">Paper Rex</span>
                      <span className="team-emoji font-mono">[PRX]</span>
                    </div>

                    <div className="embed-fields font-mono">
                      <div className="embed-field">
                        <span className="field-name">MATCH TIME</span>
                        <span className="field-val">&lt;t:1740000000:F&gt; (Local to viewer)</span>
                      </div>
                      <div className="embed-field">
                        <span className="field-name">STARTS</span>
                        <span className="field-val highlight">&lt;t:1740000000:R&gt; (in 45 minutes)</span>
                      </div>
                      <div className="embed-field">
                        <span className="field-name">FORMAT</span>
                        <span className="field-val">Best of 3 (BO3)</span>
                      </div>
                      <div className="embed-field">
                        <span className="field-name">VLR SOURCE</span>
                        <span className="field-val">vlr.gg/12345/sen-vs-prx</span>
                      </div>
                    </div>

                    <div className="embed-footer font-mono">
                      <span>Synchronized via MatchService · In-place editable</span>
                      <span>·</span>
                      <span>Event logo parsed via Cheerio</span>
                    </div>
                  </div>
                </div>

                {/* Team Reactions */}
                <div className="discord-reactions font-mono">
                  <div className="reaction-pill active-react">
                    <span className="react-icon">[SEN]</span>
                    <span className="react-count">1</span>
                  </div>
                  <div className="reaction-pill active-react">
                    <span className="react-icon">[PRX]</span>
                    <span className="react-count">1</span>
                  </div>
                  <span className="react-caption">
                    (Auto-reacted with synced Discord Application Emojis)
                  </span>
                </div>

                {/* Embed Action simulation */}
                <div className="embed-sim-actions">
                  <button
                    type="button"
                    className="sim-btn font-mono"
                    onClick={() => setInPlaceEdited(!inPlaceEdited)}
                  >
                    <FaSyncAlt aria-hidden="true" />
                    <span>{inPlaceEdited ? "Reset Embed" : "Simulate 15-Minute In-Place Edit"}</span>
                  </button>
                  <span className="sim-hint font-mono">
                    {inPlaceEdited
                      ? "Embed updated in-place without reposting or channel spam!"
                      : "Preserves chat history by editing existing message IDs."}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Polite Scraping Pipeline & LRU Emoji Cache */}
        {activeTab === 'pipeline' && (
          <div className="pipeline-panel font-mono" role="tabpanel">
            <div className="pipeline-grid">
              <div className="pipeline-card">
                <div className="card-kicker">POLITE VLR.GG SCRAPING PIPELINE</div>
                <div className="pipeline-steps">
                  <div className="step-item">
                    <span className="step-num">01</span>
                    <div className="step-content">
                      <strong>Strict Serial Queue (p-queue):</strong> Concurrency capped at <code>1</code>. Never opens simultaneous connections to VLR.gg.
                    </div>
                  </div>
                  <div className="step-item">
                    <span className="step-num">02</span>
                    <div className="step-content">
                      <strong>1,500ms Sliding Window:</strong> Enforces minimum 1.5s interval between consecutive request starts (&lt; 40 req/min worst-case).
                    </div>
                  </div>
                  <div className="step-item">
                    <span className="step-num">03</span>
                    <div className="step-content">
                      <strong>Countdown Pre-Filter:</strong> Evaluates list-page countdown (e.g. <code>"2h 30m"</code>). Matches outside query window are skipped before requesting detail pages.
                    </div>
                  </div>
                  <div className="step-item">
                    <span className="step-num">04</span>
                    <div className="step-content">
                      <strong>Instant 403 / 429 Abort:</strong> Never retries rate limits or forbidden responses. Halts batch immediately to protect IP reputation.
                    </div>
                  </div>
                </div>
              </div>

              <div className="pipeline-card">
                <div className="card-kicker">DYNAMIC APPLICATION EMOJI LRU CACHE</div>
                <div className="pipeline-steps">
                  <div className="step-item">
                    <span className="step-num">01</span>
                    <div className="step-content">
                      <strong>Automatic Logo Sync:</strong> Downloads team logo from VLR.gg and uploads as a global Discord Application Emoji named <code>vct_&lt;vlrTeamId&gt;</code>.
                    </div>
                  </div>
                  <div className="step-item">
                    <span className="step-num">02</span>
                    <div className="step-content">
                      <strong>50-Emoji LRU Eviction:</strong> Caps at Discord's 50 application emoji limit. Evicts least-recently-used emoji based on <code>lastUsedAt</code> in SQLite.
                    </div>
                  </div>
                  <div className="step-item">
                    <span className="step-num">03</span>
                    <div className="step-content">
                      <strong>DB Wipe State Recovery:</strong> Catches <code>APPLICATION_EMOJI_NAME_ALREADY_TAKEN</code> on startup if DB is wiped, silently restoring cache without crashing.
                    </div>
                  </div>
                  <div className="step-item">
                    <span className="step-num">04</span>
                    <div className="step-content">
                      <strong>Incremental Results Ingestion:</strong> Ingests up to 50 results from <code>/matches/results</code>, skipping network requests for matches already completed in SQLite.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Spoiler Protection & Slash Engine */}
        {activeTab === 'spoilers' && (
          <div className="spoilers-panel font-mono" role="tabpanel">
            <div className="command-header">
              <span className="cmd-prompt">/schedule last team:Sentinels</span>
              <span className="cmd-meta">100% SQLite Read · 0 VLR HTTP Calls · &lt; 15ms Response</span>
            </div>

            <div className="spoiler-card">
              <div className="spoiler-title">COMPLETED MATCH // VCT MASTERS</div>
              <div className="spoiler-series">
                <span>Sentinels</span>
                <span className={`spoiler-block ${revealedSpoilers ? 'revealed' : ''}`}>
                  {revealedSpoilers ? "[2]" : "||[2]||"}
                </span>
                <span>vs</span>
                <span>Paper Rex</span>
                <span className={`spoiler-block ${revealedSpoilers ? 'revealed' : ''}`}>
                  {revealedSpoilers ? "[0]" : "||[0]||"}
                </span>
              </div>

              <div className="maps-spoiler-list">
                <div className="map-spoiler-row">
                  <span className="map-tag">MAP 1</span>
                  <span className={`spoiler-block ${revealedSpoilers ? 'revealed' : ''}`}>
                    {revealedSpoilers ? "Haven 13 - 6 (SEN)" : "|| Haven 13 - 6 ||"}
                  </span>
                </div>
                <div className="map-spoiler-row">
                  <span className="map-tag">MAP 2</span>
                  <span className={`spoiler-block ${revealedSpoilers ? 'revealed' : ''}`}>
                    {revealedSpoilers ? "Ascent 13 - 10 (SEN)" : "|| Ascent 13 - 10 ||"}
                  </span>
                </div>
                <div className="map-spoiler-row padding-row">
                  <span className="map-tag">MAP 3 (UNPLAYED DECIDER PADDING)</span>
                  <span className={`spoiler-block ${revealedSpoilers ? 'revealed' : ''}`}>
                    {revealedSpoilers ? "Abyss 0 - 0 (Unplayed)" : "|| Abyss 0 - 0 ||"}
                  </span>
                </div>
              </div>

              <div className="spoiler-explanation">
                <strong>Anti-Spoiler Architecture:</strong> Even when a BO3 ends in a 2-0 sweep, Map 3 is padded with <code>|| Abyss 0 - 0 ||</code> using the scheduled decider map name. Viewers cannot guess the series length or outcome before intentionally clicking the spoiler tag.
              </div>

              <button
                type="button"
                className="toggle-spoiler-btn"
                onClick={() => setRevealedSpoilers(!revealedSpoilers)}
              >
                <FaBolt aria-hidden="true" />
                <span>{revealedSpoilers ? "Hide Discord Spoilers" : "Click to Reveal Discord Spoilers"}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpikeSyncWidget;
