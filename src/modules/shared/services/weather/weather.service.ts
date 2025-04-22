import weatherMock from '~/shared/mock/weather.json';

class WeatherService {
	then(arg0: (result: any) => void) {
		throw new Error('Method not implemented.');
	}
	async getWeather() {
		return weatherMock;
	}
}
export const weatherService = new WeatherService();
