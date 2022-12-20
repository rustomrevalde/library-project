class Library {
    subjects = [
        {   
            id: 1,
            name: 'Mathematics'
        },
        {   
            id: 2,
            name: 'English'
        },
        {   
            id: 3,
            name: 'Science'
        }
        
    ];

    books = [
        {
            subject_id: 1,
            name: 'Advanced Algebra',
            author: 'John Redden',
            status: 'available'
        },
        {
            subject_id: 1,
            name: 'Calculus',
            author: 'James Callahan',
            status: 'unavailable'
        },
        {
            subject_id: 2, 
            name: 'Don Quixote',
            author: 'Miguel de Cervantes',
            status: 'unavailable'
            
        },
        {
            subject_id: 2, 
            name: 'Lord of the Rings',
            author: 'J.R.R. Tolkien',
            status: 'available'
            
        },
        {
            subject_id: 3, 
            name: 'Insectpedia',
            author: 'Eric. R. Eaton',
            status: 'available'
            
        },
        {
            subject_id: 3, 
            name: 'The Science of Can and Can’t',
            author: 'Chiara Marletto',
            status: 'available'
        }
    ];

    addSubject(subject) {
        const subjectName = {
            id: this.subjects.length + 1,
            name: subject
        }

        this.subjects.push(subjectName);
    }

    addBook(subjectId, name, author) {
        const selectedBook = {
            subject_id: +subjectId,
            name: name,
            author: author,
            status: 'available'
        }

        this.books.push(selectedBook);
    }

    getSubjects() {
        return this.subjects;
    }

    getBooks() {
        return this.books;
    }
}
