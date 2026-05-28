import React from 'react';
import { Info, AlertTriangle, Lightbulb } from 'lucide-react';

export type CalloutType = 'info' | 'warning' | 'tip';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Callout({ type = 'info', title, children, className = '' }: CalloutProps) {
  const styles = {
    info: 'bg-blue-50 text-blue-900 border-blue-200',
    warning: 'bg-amber-50 text-amber-900 border-amber-200',
    tip: 'bg-green-50 text-green-900 border-green-200',
  };

  const icons = {
    info: <Info className="w-5 h-5 text-blue-600 mt-0.5" />,
    warning: <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />,
    tip: <Lightbulb className="w-5 h-5 text-green-600 mt-0.5" />,
  };

  return (
    <div className={`p-4 rounded-xl border flex gap-3 ${styles[type]} ${className}`}>
      <div className="flex-shrink-0">
        {icons[type]}
      </div>
      <div>
        {title && <h4 className="font-semibold mb-1">{title}</h4>}
        <div className="text-sm opacity-90 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
