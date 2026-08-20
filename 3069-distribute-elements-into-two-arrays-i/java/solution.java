        
        }
        int[] result = new int[n];
        for (int i = 0; i<arr1.size();i++){
            result[i] = arr1.get(i);
        }
        return result;
        for (int i = 0; i<arr2.size();i++){
            result[arr1.size() + i] = arr2.get(i);
        }
    }
}
