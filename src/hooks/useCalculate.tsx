import { FIXED_COST, SAVINGS } from "../constant/usecalculateConstant";
import { Savings, fixedCost } from "../types/useCalculateTypes";

/**
 * 計算に関するカスタムフック
 * @param salary - 画面で入力された給料
 * @return 計算結果
 */
export const useCalculate = (salary: number): number => {
  // 入力されていない場合は0を返す
  if (salary <= 0) {
    return 0;
  }
  // 固定費の合計を計算
  const totalFixedCost = calculateSumInObject(FIXED_COST);
  // 貯金額の合計を計算
  const totalSaving = calculateSumInObject(SAVINGS);
  // 給料から固定費、貯金額を引いた値をリターン
  return salary - totalFixedCost - totalSaving;
}

/**
 * オブジェクト内の合計値を計算する
 * @param values - 固定費or貯金額
 * @return 固定費or貯金額の合計値
 */
const calculateSumInObject = (values: fixedCost | Savings) => {
  return Object.values(values).reduce((sum, value) => sum + value, 0);
}