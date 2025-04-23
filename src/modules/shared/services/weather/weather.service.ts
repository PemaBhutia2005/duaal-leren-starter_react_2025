import weatherMock from '~/shared/mock/weather.json';

class WeatherService {
	then(arg0: (result: any) => void) {
		throw new Error('Method not implemented.');
	}
	getWeather() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(weatherMock);
			}, 1000);
		});
	}
}
export const weatherService = new WeatherService();
