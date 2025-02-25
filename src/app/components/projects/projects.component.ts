import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  designProjects = [
    { name: "In-A-Flash – Courier App Landing Page", image: "assets/in-a-flash.jpg", description: "A sleek, user-friendly landing page for In-A-Flash, a courier app with a negotiation system, multi-stop delivery, courier selection, and dynamic scheduling. The design emphasizes efficiency, flexibility, and ease of use for fast, reliable deliveries.", link: "https://www.figma.com/proto/JpuNMXDh6lyIq55xro2NVq/In-A-Flash-App-Landing-Page?node-id=1-966&t=wrKCC6HsosnNrYsU-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" },
    { name: "ZENgotchi– Wellness App", image: "assets/zengotchi.jpg", description: "ZENgotchi makes wellness engaging by connecting daily habits to a virtual pet. Designed for smartwatches, users track steps, stay hydrated, monitor heart rates and complete challenges to keep their ZENgotchi happy. By blending self-care with gamification, it turns wellness into a fun and rewarding experience.", link: "https://www.figma.com/proto/xGP8e1tVN9gOgNA6O82apB/Zengotchi?node-id=1-5388&p=f&t=ZXncwjzaWHFkeyhl-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4392" }
  ];

  developmentProjects = [
    { name: "Precision Fabricators", image: "assets/precision-fabricators.jpg", description: "A professional and responsive website for Precision Fabricators, highlighting their expertise in custom metal fabrication. Built with HTML, CSS and JavaScript, it features a sleek design, easy navigation and detailed service offerings to enhance customer engagement.", link: "https://nadeemalimohammed.github.io/precision-fabricators/" },
    { name: "The Hyderabad Royale", image: "assets/the-hyderabad-royale.jpg", description: "A professional and responsive website for The Hyderabad Royale, showcasing their rich culinary heritage. Built with React and JavaScript, it features an elegant design, user-friendly navigation, and a detailed menu to enhance customer experience.", link: "https://nadeemalimohammed.github.io/the-hyderabad-royale/" }
  ];
}