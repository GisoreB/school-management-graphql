# Screenshots
![Screenshot 2024-05-16 110650](https://github.com/GisoreB/school-management-graphql/assets/144854877/e95778b3-5430-4d62-8bd8-130fb9f5c5b9)

The following queries are available:

-> getMyConversations: Receive all student conversations.
-> getConversationMessages: Receive all student conversations messages.
-> getAllGraduateStudents: Receiving all graduated students.
-> getAllDismissedStudents: Receiving all dismissed students.
-> conversation: Retrieves a special conversation information.
-> student: Retrieves a special student information.
-> seminar: Retrieves a special seminar information.
-> dissertation: Retrieves a special dissertation information.
-> supervisor: Retrieves a special supervisor information.

The following mutations are available:

-> sendCode: send email verification code.
-> register: Registers a new student in the system.
-> login: Login student in system
-> createSupervisor: Create a new supervisor. required role: admin.
-> addEducational: Adds the Educational information for a supervisor.
-> selectSupervisor: Selection of supervisor by the student.
-> createConversation: create a Conversation between the student and the supervisor.
-> sendMessage: Sending messages by students and supervisors.
-> doneConversation: End the conversation.
-> completeProfile: Complete the student profile.
-> createSeminar: Making the seminar by the student.
-> createDissertation: Making the Dissertation by the student.
-> addForm: Adding forms step by step for seminars and Dissertation.

note: there are such mutations for updating and deleting seminars, dissertation, students, etc. by the admin. which is available in the documents.
