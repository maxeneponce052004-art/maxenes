$(document).ready(function() {
    var queue = [];
    var stack = [];

    $('#queue-btn').click(function() {
        var numCustomers = parseInt(prompt("How many customers will you cater today?"));
        if (isNaN(numCustomers)) return;

        for (var i = 0; i < numCustomers; i++) {
            var customerName = prompt("Enter name of customer " + (i + 1));
            if (customerName) queue.push(customerName);
        }

        // Mas mainam na i-clear muna ang output bago mag-append
        $('#output').empty(); 
        
        while (queue.length > 0) {
            var current = queue[0];
            $('#output').append("Serving: " + current + "<br>");
            $('#output').append("Served: " + queue.shift() + "<br>");
            $('#output').append("Remaining Size: " + queue.length + "<br><hr>");
        }
    });

    $('#stack-btn').click(function() {
        // Inalis ang while(true) para hindi mag-hang ang browser
        var choice = prompt("Choose an operation:\n1. Push\n2. Pop\n3. Size\n4. Peek\n5. Exit");
        
        switch (choice) {
            case '1':
                var value = prompt("Enter an integer to push:");
                if (value !== null) {
                    stack.push(value);
                    $('#output').append(value + " pushed to stack.<br>");
                }
                break;
            case '2':
                if (stack.length > 0) {
                    $('#output').append(stack.pop() + " popped from stack.<br>");
                } else {
                    alert("Stack is empty.");
                }
                break;
            case '3':
                $('#output').append("Current stack size: " + stack.length + "<br>");
                break;
            case '4':
                if (stack.length > 0) {
                    $('#output').append("Top element is: " + stack[stack.length - 1] + "<br>");
                } else {
                    alert("Stack is empty.");
                }
                break;
            case '5':
                break;
            default:
                if (choice !== null) alert("Invalid choice.");
        }
    });

    $('#user-interface-btn').click(function() {
        var users = []; // Mas malinis kung array of objects
        for (var i = 0; i < 3; i++) {
            var email = prompt("User " + (i + 1) + " - Enter email:");
            var user = prompt("User " + (i + 1) + " - Enter username:");
            var pass = prompt("User " + (i + 1) + " - Enter password:");
            users.push({ email: email, user: user, pass: pass });
        }

        var choice = prompt("Select what you want to view (1 to 3):");
        var idx = parseInt(choice) - 1;

        if (users[idx]) {
            $('#output').html("<strong>Profile " + choice + "</strong><br>" +
                "Email: " + users[idx].email + "<br>" +
                "Username: " + users[idx].user + "<br>" +
                "Password: " + users[idx].pass + "<br>");
        } else {
            alert("Invalid selection.");
        }
    });
});
$(document).ready(function() {
    $('#save-btn').click(function(event) {
        event.preventDefault();
        var firstName = $('#first-name').val();
        var middleName = $('#middle-name').val();
        var lastName = $('#last-name').val();
        var age = $('#age').val();
        var email = $('#email').val();

        var isValid = true;

        if (firstName == '') {
            $('#first-name').addClass('error');
            isValid = false;
        } else {
            $('#first-name').removeClass('error');
        }

        if (lastName == '') {
            $('#last-name').addClass('error');
            isValid = false;
        } else {
            $('#last-name').removeClass('error');
        }

        if (age == '') {
            $('#age').addClass('error');
            isValid = false;
        } else {
            $('#age').removeClass('error');
        }

        if (email == '') {
            $('#email').addClass('error');
            isValid = false;
        } else {
            $('#email').removeClass('error');
        }

        if (!isValid) {
            alert('Please fill in all requirements');
            return;
        }

        var row = '<tr>' +
            '<td>' + firstName + '</td>' +
            '<td>' + middleName + '</td>' +
            '<td>' + lastName + '</td>' +
            '<td>' + age + '</td>' +
            '<td>' + email + '</td>' +
            '</tr>';

        $('#table-body').append(row);

        $('#first-name').val('');
        $('#middle-name').val('');
        $('#last-name').val('');
        $('#age').val('');
        $('#email').val('');
    });
});