// this is a simple section header component with a heading and optional description
const SectionHeader = ({ heading, description }) => {
  return (
    <div className="flex flex-col items-center text-center md:my-14 my-8 mx-auto w-full max-w-2xl">
      <div className="flex items-center justify-center w-full mb-4">
        <div className="flex-grow h-1 rounded bg-gradient-to-r from-blue-500 to-transparent"></div>
        <span className="px-4 italic text-blue-500 font-semibold tracking-wide text-xl">
          {heading}
        </span>
        <div className="flex-grow h-1 rounded bg-gradient-to-l from-blue-500 to-transparent"></div>
      </div>
      {description && (
        <p className="text-base md:text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;
