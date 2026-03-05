function match(candidate, job) {
  if (!candidate.minSalary || !job.maxSalary) {
    throw new Error();
  }
  
  return candidate.minSalary * 0.9 <= job.maxSalary;
}

/* comparing the adjusted minimum to the job's max salary. if yes, min salary is less than or equal to max of job salary, it is yes so returning true */