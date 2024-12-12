document.addEventListener('DOMContentLoaded', () => {
    const categoryData = {
        'home-projects': [
            { name: 'John Doe', address: '123 Main St', number: '123-456-7890', ratings: '4.5/5' },
            { name: 'Jane Smith', address: '456 Oak St', number: '987-654-3210', ratings: '4.7/5' },
            { name: 'Mike Johnson', address: '789 Pine St', number: '567-890-1234', ratings: '4.2/5' },
            { name: 'Emily Davis', address: '101 Maple St', number: '432-109-8765', ratings: '4.9/5' },
            { name: 'Sarah Brown', address: '202 Birch St', number: '345-678-9012', ratings: '4.1/5' }
        ],
        'maintenance': [
            { name: 'Robert White', address: '12 Clover Ave', number: '888-999-7777', ratings: '4.6/5' },
            { name: 'Alice Green', address: '45 Elm St', number: '999-888-7776', ratings: '4.8/5' },
            { name: 'James Black', address: '78 Cedar Rd', number: '777-666-5555', ratings: '4.4/5' },
            { name: 'Karen Gray', address: '23 Willow Ln', number: '666-555-4444', ratings: '4.3/5' },
            { name: 'Tom Blue', address: '56 Spruce Ct', number: '555-444-3333', ratings: '4.7/5' }
        ],
        'remodeling': [
            { name: 'Victor Adams', address: '34 Ivy Way', number: '333-222-1111', ratings: '4.5/5' },
            { name: 'Rebecca Scott', address: '67 Orchid Dr', number: '444-555-6666', ratings: '4.6/5' },
            { name: 'Samuel Carter', address: '89 Lily Blvd', number: '111-222-3333', ratings: '4.8/5' },
            { name: 'Nina Turner', address: '90 Daffodil Ct', number: '222-333-4444', ratings: '4.9/5' },
            { name: 'George Evans', address: '12 Rose Ave', number: '333-444-5555', ratings: '4.2/5' }
        ],
        'construction': [
            { name: 'Carlos Rivera', address: '101 Brick Rd', number: '123-123-1234', ratings: '4.6/5' },
            { name: 'Diana Lopez', address: '202 Cement Blvd', number: '234-234-2345', ratings: '4.7/5' },
            { name: 'Ethan Cooper', address: '303 Steel St', number: '345-345-3456', ratings: '4.5/5' },
            { name: 'Lucy Morgan', address: '404 Wood Ave', number: '456-456-4567', ratings: '4.4/5' },
            { name: 'Oliver Parker', address: '505 Glass Dr', number: '567-567-5678', ratings: '4.3/5' }
        ],
        'inspection': [
            { name: 'Hannah Moore', address: '11 Audit Ln', number: '678-678-6789', ratings: '4.8/5' },
            { name: 'Ryan Hill', address: '22 Safety St', number: '789-789-7890', ratings: '4.7/5' },
            { name: 'Mia Brooks', address: '33 Compliance Ct', number: '890-890-8901', ratings: '4.9/5' },
            { name: 'Adam Ward', address: '44 Review Rd', number: '901-901-9012', ratings: '4.5/5' },
            { name: 'Sophia Reed', address: '55 Check Blvd', number: '012-012-0123', ratings: '4.6/5' }
        ],
        'cleaning': [
            { name: 'Liam Young', address: '12 Sparkle St', number: '345-345-3451', ratings: '4.8/5' },
            { name: 'Emma Walker', address: '34 Shine Blvd', number: '456-456-4562', ratings: '4.7/5' },
            { name: 'Mason Hall', address: '56 Gleam Ave', number: '567-567-5673', ratings: '4.9/5' },
            { name: 'Ava Allen', address: '78 Glow Ct', number: '678-678-6784', ratings: '4.6/5' },
            { name: 'Noah Lee', address: '90 Polish Dr', number: '789-789-7895', ratings: '4.5/5' }
        ],
        'gardening': [
            { name: 'Isabella Wright', address: '101 Greenway Ln', number: '123-123-1212', ratings: '4.8/5' },
            { name: 'Elijah King', address: '202 Lawn Dr', number: '234-234-2323', ratings: '4.9/5' },
            { name: 'Olivia Baker', address: '303 Arbor Ct', number: '345-345-3434', ratings: '4.7/5' },
            { name: 'Lucas Scott', address: '404 Bloom Blvd', number: '456-456-4545', ratings: '4.6/5' },
            { name: 'Charlotte Adams', address: '505 Garden St', number: '567-567-5656', ratings: '4.5/5' }
        ],
        'more-services': [
            { name: 'Jack Miller', address: '101 Extra Ln', number: '111-222-3334', ratings: '4.7/5' },
            { name: 'Amelia Wilson', address: '202 Bonus Dr', number: '222-333-4445', ratings: '4.6/5' },
            { name: 'Henry Taylor', address: '303 Additional Ct', number: '333-444-5556', ratings: '4.5/5' },
            { name: 'Mila Harris', address: '404 Supplementary Rd', number: '444-555-6667', ratings: '4.8/5' },
            { name: 'Evelyn Clark', address: '505 Extended Blvd', number: '555-666-7778', ratings: '4.9/5' }
        ]
    };
    

    const listContainer = document.getElementById('name-list-container');
    const selectedCategory = 'home-projects'; // Update dynamically if needed
    const names = categoryData[selectedCategory];

    // Populate the list dynamically
    names.forEach(person => {
        const listItem = document.createElement('div');
        listItem.classList.add('name-list-item');

        listItem.innerHTML = `
            <div class="name-item">${person.name}</div>
            <div class="address-item">${person.address}</div>
            <div class="number-item">${person.number}</div>
            <div class="ratings-item">${person.ratings}</div>
            <button class="hire-button">Hire</button>
        `;

        listContainer.appendChild(listItem);

        // Add "Hire" button functionality
        listItem.querySelector('.hire-button').addEventListener('click', () => {
            alert(`You have hired ${person.name}`);
        });
    });
});
