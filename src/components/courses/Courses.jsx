import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import courseImg from '../../images/course-img.jpg';
import CourseCard from './CourseCard';

function Courses() {
	return (
		<div className="h-screen bg-slate-50 px-16 py-16">
			<h2 className="text-4xl font-semibold">What to learn next</h2>
			<Swiper
				style={{
					'--swiper-navigation-color': '#000',
				}}
				slidesPerView={1}
				spaceBetween={20}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 50,
					},
				}}
				navigation={true}
				modules={[Navigation]}
				className="mt-16 py-8"
			>
				<SwiperSlide>
					<CourseCard courseImg={courseImg} />
				</SwiperSlide>
				<SwiperSlide>
					<CourseCard courseImg={courseImg} />
				</SwiperSlide>
				<SwiperSlide>
					<CourseCard courseImg={courseImg} />
				</SwiperSlide>
				<SwiperSlide>
					<CourseCard courseImg={courseImg} />
				</SwiperSlide>
				<SwiperSlide>
					<CourseCard courseImg={courseImg} />
				</SwiperSlide>
				<SwiperSlide>
					<CourseCard courseImg={courseImg} />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default Courses;