import type * as React from "react";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, NavLink } from "react-router";
import { IFSPLogo } from "@/assets/ifsp-logo";

const components: { title: string; to: string; description: string }[] = [
	{
		title: "Alert Dialog",
		to: "/docs/primitives/alert-dialog",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "Hover Card",
		to: "/docs/primitives/hover-card",
		description:
			"For sighted users to preview content available behind a link.",
	},
	{
		title: "Progress",
		to: "/docs/primitives/progress",
		description:
			"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
	},
	{
		title: "Scroll-area",
		to: "/docs/primitives/scroll-area",
		description: "Visually or semantically separates content.",
	},
	{
		title: "Tabs",
		to: "/docs/primitives/tabs",
		description:
			"A set of layered sections of content—known as tab panels—that are displayed one at a time.",
	},
	{
		title: "Tooltip",
		to: "/docs/primitives/tooltip",
		description:
			"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
	},
];

export function Navbar() {
	return (
		<div className="flex px-8 py-4 items-center justify-between w-full">
			<NavigationMenu viewport={false}>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink
							asChild
							className={navigationMenuTriggerStyle()}
						>
							<NavLink to="/">
								<div className="flex gap-2 items-center">
									<IFSPLogo className="size-6" />
									<span className="text-xl font-bold">Eventos</span>
								</div>
							</NavLink>
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<NavigationMenu viewport={false}>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Home</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
								<li className="row-span-3">
									<NavigationMenuLink asChild>
										<a
											className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
											href="/"
										>
											<div className="mt-4 mb-2 text-lg font-medium">
												shadcn/ui
											</div>
											<p className="text-muted-foreground text-sm leading-tight">
												Beautifully designed components built with Tailwind CSS.
											</p>
										</a>
									</NavigationMenuLink>
								</li>
								<ListItem to="/docs" title="Introduction">
									Re-usable components built using Radix UI and Tailwind CSS.
								</ListItem>
								<ListItem to="/docs/installation" title="Installation">
									How to install dependencies and structure your app.
								</ListItem>
								<ListItem to="/docs/primitives/typography" title="Typography">
									Styles for headings, paragraphs, lists...etc
								</ListItem>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Components</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
								{components.map((component) => (
									<ListItem
										key={component.title}
										title={component.title}
										to={component.to}
									>
										{component.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink
							asChild
							className={navigationMenuTriggerStyle()}
						>
							<NavLink to="/about">Sobre</NavLink>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>List</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[300px] gap-4">
								<li>
									<NavigationMenuLink asChild>
										<NavLink to="#">
											<div className="font-medium">Components</div>
											<div className="text-muted-foreground">
												Browse all components in the library.
											</div>
										</NavLink>
									</NavigationMenuLink>
									<NavigationMenuLink asChild>
										<NavLink to="#">
											<div className="font-medium">Documentation</div>
											<div className="text-muted-foreground">
												Learn how to use the library.
											</div>
										</NavLink>
									</NavigationMenuLink>
									<NavigationMenuLink asChild>
										<NavLink to="#">
											<div className="font-medium">Blog</div>
											<div className="text-muted-foreground">
												Read our latest blog posts.
											</div>
										</NavLink>
									</NavigationMenuLink>
								</li>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<NavigationMenu viewport={false}>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink
							asChild
							className={navigationMenuTriggerStyle()}
						>
							<Link to="#" className="flex-row items-center gap-2">
								Desconectar
							</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger className="bg-zinc-950 text-zinc-50 font-bold hover:bg-zinc-800 hover:text-zinc-50 focus:bg-zinc-800 focus:text-zinc-50 data-[state=open]:!bg-zinc-800 data-[state=open]:text-zinc-50">
							Abner J. Silva
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[300px] gap-4">
								<li>
									<NavigationMenuLink asChild>
										<NavLink to="#">
											<div className="font-medium">Components</div>
											<div className="text-muted-foreground">
												Browse all components in the library.
											</div>
										</NavLink>
									</NavigationMenuLink>
									<NavigationMenuLink asChild>
										<NavLink to="#">
											<div className="font-medium">Documentation</div>
											<div className="text-muted-foreground">
												Learn how to use the library.
											</div>
										</NavLink>
									</NavigationMenuLink>
									<NavigationMenuLink asChild>
										<NavLink to="#">
											<div className="font-medium">Blog</div>
											<div className="text-muted-foreground">
												Read our latest blog posts.
											</div>
										</NavLink>
									</NavigationMenuLink>
								</li>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}

function ListItem({
	title,
	children,
	to,
	...props
}: React.ComponentPropsWithoutRef<"li"> & { to: string }) {
	return (
		<li {...props}>
			<NavigationMenuLink asChild>
				<NavLink to={to}>
					<div className="text-sm leading-none font-medium">{title}</div>
					<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
						{children}
					</p>
				</NavLink>
			</NavigationMenuLink>
		</li>
	);
}
