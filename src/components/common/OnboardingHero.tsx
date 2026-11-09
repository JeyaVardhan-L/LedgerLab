import React from 'react';
import { Play, Compass, ArrowRight, ShieldCheck, Cpu, Link2, Award } from 'lucide-react';
import { LabTab } from '../../App';

const STAGES: ReadonlyArray<{
  tab: LabTab;
  number: number;
  title: string;
  summary: string;
  Icon: typeof ShieldCheck;
}> = [
  {
    tab: 'hash',
    number: 1,
    title: 'Cryptographic Hashes',
    summary: 'Digital fingerprints & the avalanche effect',
    Icon: ShieldCheck,
  },
  {
    tab: 'block',
    number: 2,
    title: 'Block Structure',
    summary: 'Packaging data & proof-of-work mining',
    Icon: Cpu,
  },
  {
    tab: 'blockchain',
    number: 3,
    title: 'The Blockchain',
    summary: 'Parent linkage & cascading invalidation',
    Icon: Link2,
  },
  {
    tab: 'lessons',
    number: 4,
    title: 'Attack & Defense',
    summary: 'Why rewriting history requires work',
    Icon: Award,
  },
];

interface OnboardingHeroProps {
  isGuidedMode: boolean;
  onStartGuided: () => void;
  onExploreSandboxes: () => void;
  onNavigateTab: (tab: LabTab) => void;
}

export const OnboardingHero: React.FC<OnboardingHeroProps> = ({
  isGuidedMode,
  onStartGuided,
  onExploreSandboxes,
  onNavigateTab,
}) => {
  return (
    <div
      id="onboarding-hero"
      className="card"
      style={{
        marginBottom: '24px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-accent)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Header Badges & Title */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap',
              marginBottom: '10px',
            }}
          >
            <span className="badge badge-cyan">
              <ShieldCheck size={12} /> Interactive Laboratory
            </span>
            <span className="badge badge-amber">Pure Computer Science</span>
            <span
              style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Zero Speculation • Zero Financial Tokens
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.75rem, 7vw, 4.125rem)',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              lineHeight: 0.95,
              marginBottom: '8px',
            }}
          >
            LedgerLab{' '}
            <span
              style={{
                textDecoration: 'underline',
                textDecorationColor: 'var(--color-ember)',
                textDecorationThickness: '4px',
                textUnderlineOffset: '8px',
              }}
            >
              Start Here
            </span>
          </h1>

          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              maxWidth: '780px',
              lineHeight: 1.6,
            }}
          >
            Learn how blockchains work by building them, breaking them, and discovering
            why mathematics makes history tamper-evident. Follow the guided experiment
            below or explore individual laboratories at your own pace.
          </p>
        </div>

        {/* 4-Step Learning Path */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px',
          }}
        >
          {STAGES.map(({ tab, number, title, summary, Icon }) => (
            <button
              key={tab}
              type="button"
              className="stage-card"
              onClick={() => onNavigateTab(tab)}
            >
              <span className="stage-card-label">
                <span className="stage-card-number" aria-hidden="true">
                  {number}
                </span>
                STAGE 0{number}
                <Icon size={13} aria-hidden="true" className="stage-card-icon" />
              </span>
              <span className="stage-card-title">{title}</span>
              <span className="stage-card-summary">{summary}</span>
            </button>
          ))}
        </div>

        {/* CTA Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            paddingTop: '4px',
          }}
        >
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              id="start-guided-journey-btn"
              onClick={onStartGuided}
              className="btn btn-primary"
              style={{ padding: '10px 20px', fontSize: '0.9375rem', fontWeight: 600 }}
            >
              <Play size={16} /> Start Guided Journey <ArrowRight size={14} />
            </button>
            <button
              id="explore-sandboxes-btn"
              onClick={onExploreSandboxes}
              className="btn btn-secondary"
              style={{ padding: '10px 18px', fontSize: '0.875rem' }}
            >
              <Compass size={16} /> Explore Free Sandboxes
            </button>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
            }}
          >
            <span>Current Mode:</span>
            <span
              className={`badge ${isGuidedMode ? 'badge-cyan' : 'badge-amber'}`}
              style={{ fontSize: '0.6875rem' }}
            >
              {isGuidedMode ? 'Guided Journey' : 'Free Sandbox'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
