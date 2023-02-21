import PropTypes from 'prop-types';
import {
  StatisticsBox,
  Title,
  DocList,
  DocItem,
  Num,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => (
  <StatisticsBox>
    {title && <Title>{title}</Title>}

    <DocList>
      {stats.map(stat => (
        <DocItem key={stat.id} length={stats.length}>
          <span>{stat.label}</span>
          <Num>{stat.percentage}%</Num>
        </DocItem>
      ))}
    </DocList>
  </StatisticsBox>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
