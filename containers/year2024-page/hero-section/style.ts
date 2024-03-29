export const styles = {
    headerSection: ['z-10', 
    'max-w-5xl', 
    'w-full', 
    'items-center', 
    'justify-between', 
    'font-gsans', 
    'text-sm', 
    'lg:flex'].join(' '),
    header: ['relative', 
    'w-[max-content]', 
    'font-gsans', 
    'font-bold',
    'text-3xl', 
    'before:absolute', 
    'before:inset-0', 
    'before:animate-typewriter', 
    'before:bg-black', 
    'after:absolute', 
    'after:inset-0', 
    'after:w-[0.125em]', 
    'after:animate-caret', 
    'after:bg-white'].join(' '),
    headerSub: ['fixed', 'pb-10', 'bottom-0', 'left-0', 'flex', 'h-48', 'w-full', 'items-end', 'justify-center', 'bg-gradient-to-t', 'from-primaryColor', 'via-primaryColor', 'dark:from-primaryColor', 'dark:via-primaryColor', 'lg:static', 'lg:h-auto', 'lg:w-auto', 'lg:bg-none'].join(' '),
    bodySection: ['font-gsans', 'p-15', 'mb-20', 'relative', 'flex', 'py-20', 'place-items-center', 'before:absolute', 'before:h-[300px]', 'before:w-[480px]', 'before:-translate-x-1/4', 'before:rounded-full', 'before:bg-gradient-conic', 'after:opacity-80', 'before:from-white', 'before:to-transparent', 'before:blur-2xl', "before:content-['']", 'after:absolute','after:overflow-none', 'after:rounded-full', 'after:-z-20', 'after:h-[380px]', 'after:w-[380px]', 'after:-translate-x-40', 'after:translate-y-20', 'after:bg-gradient-radial', 'after:blur-2xl', "after:content-['']", 'before:dark:bg-gradient-to-br', 'before:dark:from-transparent', 'before:dark:to-blue-700', 'before:dark:opacity-10', 'after:dark:from-sky-900', 'after:dark:via-[#0141ff]', 'after:dark:opacity-40', 'before:lg:h-[360px]', 'z-[0]'].join(' '),
    highlightSection: ['p-15', 'mb-32', 'grid', 'text-center', 'lg:max-w-5xl', 'lg:w-full', 'lg:mb-0', 'lg:grid-cols-2', 'lg:text-left'].join(' '),
    button_link: ['group', 'rounded-lg', 'border', 'border-transparent', 'px-5', 'py-4', 'transition-colors', 'hover:border-gray-300', 'hover:bg-beige', 'hover:text-black', 'hover:dark:border-neutral-700', 'hover:dark:bg-neutral-800/30'].join(' '),
    button_subTitle: ['m-0', 'max-w-[30ch]', 'text-sm', 'opacity-50'].join(' '),
    button_title: ['mb-3', 'text-2xl', 'font-gsans', 'font-semibold'].join(' '),
    button_arrow: ['inline-block', 'transition-transform', 'group-hover:translate-x-1', 'motion-reduce:transform-none'].join(' '),
  }