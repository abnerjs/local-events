import { Icon } from "@iconify/react/dist/iconify.js";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

function Home() {
	return (
		<>
			<Navbar />
			<main className="flex flex-col w-full gap-8">
				<div className="flex flex-col items-center justify-center mt-24 gap-4">
					<p className="text-sm font-bold text-zinc-500 italic">
						Explore os eventos que o IFSP têm a oferecer!
					</p>
					<h1 className="text-8xl font-extralight leading-none">
						Cursos, palestras e muito mais!
					</h1>
					<p className="text-lg text-zinc-500 max-w-xl text-center">
						Descubra uma variedade de eventos, desde palestras e workshops até
						cursos e seminários, todos projetados para enriquecer sua
						experiência educacional e profissional.
					</p>
					<Button asChild>
						<Link to="/about">
							<div className="flex items-center gap-1">
								Conheça um pouco sobre os eventos que já possuímos
								<Icon
									icon="fluent:chevron-right-20-regular"
									className="size-4"
								/>
							</div>
						</Link>
					</Button>
				</div>

				<div className="flex flex-col mx-12">
					<div className="flex items-baseline gap-4">
						<h1 className="font-bold text-lg">Eventos acontecendo agora</h1>
						<Button variant="ghost" className="text-zinc-500 font-normal">
							<div className="flex items-center gap-px">
								Ver tudo
								<Icon
									icon="fluent:chevron-right-20-regular"
									className="size-4"
								/>
							</div>
						</Button>
					</div>
					<div className="flex min-h-40 items-center">
						<p className="font-bold text-zinc-500 ml-12">
							Poxa, não têm nenhum evento rolando agora
						</p>
					</div>
				</div>

				<div className="flex flex-col mx-12">
					<div className="flex items-baseline gap-4">
						<h1 className="font-bold text-lg">Eventos anteriores</h1>
						<Button variant="ghost" className="text-zinc-500 font-normal">
							<div className="flex items-center gap-px">
								Ver tudo
								<Icon
									icon="fluent:chevron-right-20-regular"
									className="size-4"
								/>
							</div>
						</Button>
					</div>
					<div className="flex min-h-40 items-center">
						<p className="font-bold text-zinc-500 ml-12">
							Poxa, não têm nenhum evento rolando agora
						</p>
					</div>
				</div>
			</main>
		</>
	);
}

export default Home;
