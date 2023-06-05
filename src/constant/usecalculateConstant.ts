import { Savings, fixedCost } from "../types/useCalculateTypes";

// 固定費
export const FIXED_COST: fixedCost = {
  ITUNES: Number(process.env.REACT_APP_ITUNES),
  SCHOLARSHIP: Number(process.env.REACT_APP_SCHOLARSHIP),
  CHAT_GPT: Number(process.env.REACT_APP_CHAT_GPT),
  ENTERTAINMENT_COST: Number(process.env.REACT_APP_ENTERTAINMENT_COST),
  ELECTRIC_COST: Number(process.env.REACT_APP_ELECTRIC_COST),
};

// 貯金
export const SAVINGS: Savings = {
  EMERGENCY_SAVINGS: Number(process.env.REACT_APP_EMERGENCY_SAVINGS),
  RETIREMENT_SAVINGS: Number(process.env.REACT_APP_RETIREMENT_SAVINGS),
};