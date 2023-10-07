interface tooltipProps {
  children: React.ReactNode;
  tooltipContent: React.ReactNode;
}

const Tooltip = ({ children, tooltipContent }: tooltipProps) => {
  return (
    <div>
      <div className="wrapper">
        {children}
        <div className="tooltip">{tooltipContent}</div>
      </div>
    </div>
  );
};

export default Tooltip;
