type Book = {
  book: string;
  author: string;
  genre: string;
}

function progressNotification(message: string): void {
  console.log(message);
}

class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
  constructor(readingGoal: number) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      progressNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    progressNotification(
      'There are still some books to go!',
    );
  }


}

class BooksWishlist {
  private wishlist: Book[] = [];
  constructor(book: Book) {
    this.wishlist.push(book);
  }

  addToWishlist(book: Book): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }
}

const readTracker = new ReadingTracker(20);
// readTracker.addToWishlist({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
// readTracker.showWishlist();
readTracker.trackReadings(12);
readTracker.trackReadings(9);

const wishlist = new BooksWishlist({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
wishlist.showWishlist();