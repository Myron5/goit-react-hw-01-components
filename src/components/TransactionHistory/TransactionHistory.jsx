import PropTypes from 'prop-types';
import {
  Table,
  THead,
  Th,
  Tr,
  LeftCol,
  CenterCol,
  RightCol,
  SpanLeft,
  SpanCenter,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => (
  <Table>
    <THead>
      <tr>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
      </tr>
    </THead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <Tr key={id}>
          <LeftCol>
            <SpanLeft>{type}</SpanLeft>
          </LeftCol>
          <CenterCol>
            <SpanCenter>{amount}</SpanCenter>
          </CenterCol>
          <RightCol>{currency}</RightCol>
        </Tr>
      ))}
    </tbody>
  </Table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
