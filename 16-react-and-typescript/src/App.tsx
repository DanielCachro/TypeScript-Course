import {useState} from 'react'
import Header from './components/Header.tsx'
import CouseGoals from './components/CourseGoals.tsx'
import NewGoal from './components/NewGoal.tsx'
import goalsImg from './assets/goals.jpg'

function App() {
	const [goals, setGoals] = useState([
		{id: 1, title: 'Learn TS', description: 'Learn TS from the ground up'},
		{id: 2, title: 'Practice TS', description: 'Practice working with TypeScript'},
	])

	function handleDeleteGoal(id: number) {
		setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id))
	}

	function handleCreateGoal(title: string, summary: string) {
		setGoals(prevGoals => prevGoals.concat({id: Math.random(), title: title, description: summary}))
	}

	return (
		<main>
			<Header image={{src: goalsImg, alt: 'A list of goals'}}>
				<h1>Your Course Goals</h1>
			</Header>
			<CouseGoals goals={goals} onDelete={handleDeleteGoal} />
			<NewGoal onCreate={handleCreateGoal} />
		</main>
	)
}

export default App
