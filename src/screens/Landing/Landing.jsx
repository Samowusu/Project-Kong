import { useState } from 'react';
import { Calendar } from '../../components/Calendar';
import { Tasks } from '../../components/Tasks';
import { CreateTaskModal } from '../../components/CreateTaskModal';
import { Container, Txt, TxtBold } from './styles';

export const Landing = () => {
	const [showModalState, setShowModalState] = useState(false);

	const toggleModalHandler = () => {
		setShowModalState((prevState) => !prevState);
	};

	return (
		<Container>
			<Txt>A clean slate!</Txt>
			<TxtBold>Let's find something to do...</TxtBold>
			<Calendar />
			<Tasks onPress={toggleModalHandler} />
			<CreateTaskModal
				visible={showModalState}
				toggleModal={toggleModalHandler}
			/>
		</Container>
	);
};
