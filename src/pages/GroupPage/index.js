// import { useParams } from 'react-router-dom';
import HabitList from '../../components/habits/HabitList';
// import { useDailyHabits } from '../../hooks/useDailyHabits';
// import getCurrentDate from '../../utils/getCurrentDate';

const mockResponseData = {
  status: 200,
  data: {
    시환: [
      {
        _id: '603f650b1f32123d20b5372b',
        habitTitle: 'Morning Run',
        startTime: '06:00',
        endTime: '07:00',
      },
      {
        _id: '603f650b1f32123d20b5372c',
        habitTitle: 'Reading',
        startTime: '21:00',
        endTime: '22:00',
      },
    ],
    지은: [
      {
        _id: '603f650b1f32123d20b5372e',
        habitTitle: 'Meditation',
        startTime: '05:30',
        endTime: '06:00',
      },
    ],
  },
};

function GroupPage() {
  // const { groupId } = useParams('groupId');
  // const currentDate = getCurrentDate();
  // const { dailyHabits, loading, error } = useDailyHabits(
  //   `api/group/${groupId}/habitList?date=${currentDate}`,
  // );

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='min-h-screen flex flex-col bg-main-bg text-white bg-vignette'>
      <HabitList dailyHabits={mockResponseData}></HabitList>
    </div>
  );
}

export default GroupPage;
