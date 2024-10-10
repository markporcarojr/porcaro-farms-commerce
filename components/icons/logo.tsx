import clsx from 'clsx';

export default function LogoIcon(props: React.ComponentProps<'img'>) {
  const logoPath = '/images/logo.png'; // Replace with actual path

  return (
    <img
      src={logoPath}
      alt={`${process.env.SITE_NAME} logo`}
      className={clsx('h-10 w-10', props.className)} // Adjust classes if needed
    />
  );
}
