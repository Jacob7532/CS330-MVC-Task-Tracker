// /src/models/TaskModel.js
class Task {
    constructor(name, status, urgency, startDate, endDate) {
        this.name = name;
        this.status = status;
        this.urgency = urgency;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

export default Task;