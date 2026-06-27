const testimonial1 = document.getElementById("student_testemonial1");
const testimonial2 = document.getElementById("student_testemonial2");

function showTestimonial(number) {
    testimonial1.style.display = "none";
    testimonial2.style.display = "none";

    document.getElementById(`student_testemonial${number}`).style.display = "block";
}

document.getElementById("student1").addEventListener("click", () => {
    showTestimonial(1);
});

document.getElementById("student2").addEventListener("click", () => {
    showTestimonial(2);
});