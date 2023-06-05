import React, { FC, useCallback, useState, useEffect } from 'react';
import { useCalculate } from './hooks/useCalculate';

/**
 * 収支管理アプリケーション
 */
export const App: FC = () => {
  // 給料
  const [salary, setSalary] = useState<number>(0);
  // 使用可能な金額
  const [availableMoney, setAvailableMoney] = useState<number>(0);
  // 計算結果
  const calculatedValue = useCalculate(salary);

  // salaryの変化に応じて、利用可能な金額を更新する
  useEffect(() => {
    setAvailableMoney(calculatedValue);
  }, [calculatedValue]);

  /**
   * 給料入力時のハンドラ
   * @param event - ReactのChangeEventオブジェクト
   */
  const handleSalaryInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSalary(Number(event.target.value));
  }, []);

  return(
    <div>
      <h1>今月の収支管理</h1>
      <h2>今月の給料(手取り額)</h2>
      <input type="number" onChange={handleSalaryInput}/>
      <h2>今月使える金額</h2>
      <div>{availableMoney}円</div>
    </div>
  );
} 
