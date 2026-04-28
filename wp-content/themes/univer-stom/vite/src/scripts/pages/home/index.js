import { slideUp, slideDown } from "../../components/slide-toggle";

document.addEventListener("DOMContentLoaded", () => {
	// Slide down approach
	slideDownBlock(".approach");

	function slideDownBlock(container) {
		const parent = document.querySelector(container);

		if (!parent) return;

		const slides = parent.querySelectorAll(".slide-down__head");

		// Устанавливаем состояние для первого открытого элемента
		const firstOpenedItem = document.querySelector(".slide-down.opened");
		if (firstOpenedItem) {
			const firstContent = firstOpenedItem.querySelector(
				".slide-down__content",
			);
			// Правильное состояние для анимации
			firstContent.style.display = "block";
			firstContent.style.height = "auto";
			firstContent.style.overflow = "visible";
		}

		slides.forEach((slide) => {
			slide.addEventListener("click", () => {
				const parent = slide.closest(".slide-down");
				const content = parent.querySelector(".slide-down__content");

				const isOpened = parent.classList.contains("opened");

				if (isOpened) {
					// Закрываем элемент
					parent.classList.remove("opened");
					slideUp(content, 500);
				} else {
					// Открываем элемент
					parent.classList.add("opened");
					slideDown(content, 500);
				}
			});
		});
	}
});
