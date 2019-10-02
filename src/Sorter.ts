// interface Sortable {
// 	length: number;
// 	compare(firstIndex: number, secondIndex: number): boolean;
// 	swap(firstIndex: number, secondIndex: number): void;
// }

export abstract class Sorter {
	abstract length: number;
	abstract compare(leftIndex: number, rightIndex: number): boolean;
	abstract swap(leftIndex: number, rightIndex: number): void;

	sort(): void {
		const length = this.length;
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.compare(j, j + 1)) {
					this.swap(j, j + 1);
				}
			}
		}
	}
}
