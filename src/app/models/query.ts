import {QueryResult} from './query-result.enum';

export interface Query
{
  result: QueryResult;
  value: string;
}
