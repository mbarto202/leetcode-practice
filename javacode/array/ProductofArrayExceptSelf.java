/*
Leetcode 238: Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal
to the product of all elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and does NOT use division.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/


package javacode.array;

public class ProductofArrayExceptSelf {
    public static void main(String[] args){
        int[] nums = {1,2,3,4};
        int[] answer = new int[nums.length];
        int prefix = 1;
        int suffix = 1;

        System.out.println("Prefix array");
        for (int i = 0; i < nums.length; i++) {
            answer[i] = prefix;
            prefix *= nums[i];
        }

        for (int i = 0; i < nums.length; i++){
            System.out.println(answer[i]);
         }

        System.out.println("Suffix/Final array");
        for (int i = nums.length - 1; i >= 0; i--) {
            answer[i] *= suffix;
            suffix *= nums[i];
        }

        for (int i = 0; i < nums.length; i++){
            System.out.println(answer[i]);
         }
    }
}
