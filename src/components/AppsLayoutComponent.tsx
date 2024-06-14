// 'use client';
// import iconSidebar from '@/assets/svg/arrow-sidebar-logo.inline.svg';
// import icon from '@/app/favicon.ico';

// import { usePathname } from 'next/navigation';
// import { DailyAppsLayout } from '@xefi/ui/layout';
// import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
// import { ReactNode } from 'react';
// import { navigationAcount, navigation } from '@/data/navigations';
// import Image from 'next/image';

// const AppsLayoutComponent = ({ children }: { children: ReactNode }) => {
// 	const pathname = usePathname();
// 	return (
// 		<DailyAppsLayout
// 			classNameContainer='shadow-xl rounded-md'
// 			header={{
// 				applicationName: 'Emargement',
// 				accountNavigation: navigationAcount,
// 				user: 'XEFI ADMIN',
// 				toggleTheme: true,
// 				Logo: (
// 					<div className='flex items-center gap-1'>
// 						<Image src={icon} alt='logo' />
// 					</div>
// 				),
// 			}}
// 			sidebar={{
// 				navigation,
// 				setOpenDropdown: () => {},
// 				pathname,
// 				iconSidebar,
// 				btnIcon: faPlusSquare,
// 			}}>
// 			<div>{children}</div>
// 		</DailyAppsLayout>
// 	);
// };

// export default AppsLayoutComponent;
