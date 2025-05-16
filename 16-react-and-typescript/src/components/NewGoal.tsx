
import {useRef, type FormEvent} from 'react'

interface NewGoalProps {
    onCreate: (title: string, summary: string) => void
}

export default function NewGoal({onCreate}: NewGoalProps) {
	const goalRef = useRef<HTMLInputElement>(null)
	const summaryRef = useRef<HTMLInputElement>(null)

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()

		const enteredGoal = goalRef.current!.value
        const enteredSummary= summaryRef.current!.value

        onCreate(enteredGoal, enteredSummary)
	}

	return (
		<form onSubmit={handleSubmit}>
			<p>
				<label htmlFor='goal'>Your Goal</label>
				<input id='goal' type='text' ref={goalRef} />
			</p>
			<p>
				<label htmlFor='summary'>Short Summary</label>
				<input id='summary' type='text' ref={summaryRef} />
			</p>
			<p>
				<button>Add Goal</button>
			</p>
		</form>
	)
}

