import fs, { appendFile } from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';





// export const otfToTtf = () => {
// 	// Ищем файлы шрифтов .oft
// 	return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
// 		.pipe(app.plugins.plumber(
// 			app.plugins.notify.onError({
// 				title: "FONTS",
// 				message: "Error: <%= error.message %>"
// 			}))
// 		)
// 		// Конвертируем в .ttf
// 		.pipe(fonter({
// 			formats: ['ttf']
// 		}))
// 		//Выгружаем в исходную папку 
// 		.pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
// }
// export const ttfToWoff = () => {
// 	// Ищем файлы шрифтов .ttf
// 	return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
// 		.pipe(app.plugins.plumber(
// 			app.plugins.notify.onError({
// 				title: "FONTS",
// 				message: "Error: <%= error.message %>"
// 			}))
// 		)
// 		// Конвертируем в .woff
// 		.pipe(fonter({
// 			formats: ['woff']
// 		}))
// 		//Выгружаем в  папку  c результатом 
// 		.pipe(app.gulp.dest(`${app.path.build.fonts}`))
// 		//Ищем файл шрифтов .ttf
// 		.pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*/ttf`))
// 		//Конвертируем в .woff2
// 		.pipe(ttf2woff2())
// 		//Выгружаем в  папку  c результатом 
// 		.pipe(app.gulp.dest(`${app.path.build.fonts}`));
// }
// export const fontsStyle = () => {
// 	//Файл стилей подключение шрифтов 
// 	let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
// 	//Проверяем существуют ли файлы  шрифтов 
// 	fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
// 		if (fontsFiles) {
// 			//Проверяем существуют ли файлы стилей для подключения шрифтов 
// 			if (!fs.existsSync(fontsFile)) {
// 				//Если файла нет, создаем его 
// 				fs.writeFile(fontsFile, '', cd);
// 				let newFileOnly;
// 				for (var i = 0; i < fontsFile.length; i++) {
// 					//Записываем подключение шрифтов в файл стилей 
// 					let fontFileName = fontsFiles[i].split('.')[0];
// 					if (newFileOnly !== fontFileName) {
// 						let fontsFileName = fontFilesName.split('-')[0] ? fontFilesName.split('-')[0] : fontFileName;
// 						let fontsFileName = fontFilesName.split('-')[1] ? fontFilesName.split('-')[1] : fontFileName;
// 						if (fontWeight.toLowerCase() === 'thin') {
// 							fontWeight = 100;
// 						} else if (fontWeight.toLowerCase() === 'extralight') {
// 							fontWeight = 200;
// 						} else if (fontWeight.toLowerCase() === 'light') {
// 							fontWeight = 300;
// 						} else if (fontWeight.toLowerCase() === 'medium') {
// 							fontWeight = 500;
// 						} else if (fontWeight.toLowerCase() === 'semibold') {
// 							fontWeight = 600;
// 						} else if (fontWeight.toLowerCase() === 'bold') {
// 							fontWeight = 700;
// 						} else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
// 							fontWeight = 800;
// 						} else if (fontWeight.toLowerCase() === 'black') {
// 							fontWeight = 900;
// 						} else {
// 							fontWeight = 400;
// 						}
// 						fs.appendFile(fontsFile, `@font-face {\n\t-font-family:${fontName};\n\tfont-display:swap;\n\tsrc:url("../fonts/${fontsFileName}.woff2) :url("../fonts/${fontsFileName}.woff) format("woff);\n\tfont-weight: ${fontWeight};\n\tfont-style:normal;\n}\r\n`, cd);
// 						newFileOnly = fontFileName;
// 					}
// 				}
// 			} else {
// 				// Еслифайл есть , выводим сообщение
// 				console.log("Файл sccs/fonts.scss уже существует. Для обновления файла нужно его удалить ");
// 			}
// 		}
// 	});

// 	return app.gulp.src(`${app.path.srcFolder}`);
// 	function cb() { }
// }