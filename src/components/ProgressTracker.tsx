interface ProgressTrackerProps {
  label: string;
  current: number;
  total: number;
  status?: string;
}

const ProgressTracker = ({ label, current, total, status }: ProgressTrackerProps) => {
  const percentage = (current / total) * 100;
  
  return (
    <div className="bg-surface p-6 rounded border border-border">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-text-secondary lowercase">{label}</span>
        <span className="text-sm text-text-muted">
          day {current}/{total}
        </span>
      </div>
      
      <div className="w-full bg-progress-bg rounded-full h-2 mb-3">
        <div 
          className="bg-progress-fill rounded-full h-2 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      {status && (
        <div className="text-sm text-text-secondary">
          status: <span className="text-accent lowercase">{status}</span>
        </div>
      )}
    </div>
  );
};

export default ProgressTracker;