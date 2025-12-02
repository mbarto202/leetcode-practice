/*
Leetcode 121: Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a stock on the i-th day.

Your goal is to choose a single day to buy one stock and choose a later day
to sell that stock in order to maximize your profit.

Return the maximum profit possible. If no profit can be made, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy at price 1 and sell at price 6.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: No profitable transaction possible.
*/

package javacode.array;

public class BestTimetoBuyandSellStock{
    public static void main(String[] args){
        int[] prices = {7,1,5,3,6,4};
        int maxProfit = 0;
        int buy = 0;
        int sell = 0;

        for(int i = 0; i < prices.length; i++){
            for(int j = i + 1; j < prices.length; j++){
                if(prices[j] - prices[i] > maxProfit){
                    buy = prices[i];
                    sell = prices[j];
                  maxProfit = sell - buy;
                }
            }
        }
        if(maxProfit == 0){
            System.out.println("No profitable transaction possible");
        }
        else{
            System.out.println("Buy at price " + buy + " and sell at price " + sell);
            System.out.println(maxProfit);
        }
    }
}