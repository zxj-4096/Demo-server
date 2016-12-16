#include <stdio.h>
void printarray(int* array,int len){
	int i;
	for(i=0;i<len;i++)
		printf("%d ",array[i]);
	printf("\n");
}
void sortarray(int* array,int len){
	int x,i,j;
	for(i=1;i<len;i++){
		if(array[i]<array[i-1]){
			x = array[i];
			j = i-1;
			while(j>=0&&x<array[j]){
				array[j+1] = array[j];
				j--;
			}
			array[j+1] = x;
		}
		printarray(array,len);
	}
}
int main(){
	int a[6] = {8,2,3,4,5,6};
	sortarray(a,6);
	return 0;
}