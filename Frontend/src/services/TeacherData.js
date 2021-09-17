let teachers = [
    { id: '1', name: "Vivek", subjects: ['Hindi', 'English'], address: "India", phone: "9724232345" },
    { id: '2', name: "Rama", subjects: ['Hindi', 'Maths'], address: "Ahmedabad", phone: "9724762345" },
	{id:'3',name:'Mahi', subjects: ['Physics', 'Maths'],address:'Delhi', phone:'9728937840'}
]; 

export const getTeachers = function(teacher){
	return teachers;
}

export const getTeacherById = function(id){	
	let teacher = {}
	for (var i = 0; i < teachers.length; i++) {
		if(id == teachers[i].id){
			return teachers[i];
		}
	}
	return teacher;
}

export const addTeacher = function(teacher){	
	teacher.id = Math.round(Math.random(289)*1000000)+'';
	teachers.push(teacher);
}

export const updateTeacher = function(teacher){
	for (var i = 0; i < teachers.length; i++) {
		if(teacher.id == teachers[i].id){
			teachers[i] = teacher;
			return;
		}
	}
}

export const getTeachersBySearch = function(field,text){
	text = text.toLowerCase();
	var tempTeachers = []
	for (var i = 0; i < teachers.length; i++){
		if(teachers[i][field].toLowerCase().startsWith(text)){
			tempTeachers.push(teachers[i]);
		}
	}
	return tempTeachers;
}
export const deleteTeacher = function({id}){ //{id:7}
	var tempTeachers = [];
	for (var i = 0; i < teachers.length; i++) {
		if(id != teachers[i].id){
			tempTeachers.push(teachers[i]);
		}
	}
	teachers = tempTeachers;
}
