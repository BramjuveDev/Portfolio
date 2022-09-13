import clsx from 'clsx';
import { AnchorHTMLAttributes } from 'react';

interface StandardPillProps extends AnchorHTMLAttributes<HTMLDivElement> {}

export function Standard({ children, className, ...rest }: StandardPillProps) {
	return (
		<div
			className={clsx(
				'inline-flex px-3 lg:px-5 py-2 md:pb-4 bg-emerald-300 bg-opacity-15 backdrop-filter backdrop-blur-sm filter saturate-200 text-emerald-200 rounded-2xl default-transition default-focus',
				className,
			)}
			target="_blank"
			rel="noreferrer noopener"
			{...rest}
		>
			{children}
		</div>
	);
}
