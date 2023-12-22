import { CriticModel } from "../Models/Critic.model";

interface LayoutProps {
	critic: CriticModel
}

const Critic = ({ critic }: LayoutProps) => {

	return (
		<div className="flex items-center">
			<div className="mr-2 text-red-600 text-lg">
				{critic.rating}
			</div>
			<div className="font-semibold mr-2">
				{critic.name}
			</div>
			<div className="italic">
				"{critic.quote}"
			</div>
		</div>
	)
}

export default Critic;