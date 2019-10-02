import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([1, 20, -3, 7]);
numbersCollection.sort();
console.log('numbersCollection');
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('hello');
charactersCollection.sort();
console.log('charactersCollection');
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(29);
linkedList.add(-10);
linkedList.add(82);
linkedList.add(7);
linkedList.sort();
console.log('linkedList');
linkedList.print();
