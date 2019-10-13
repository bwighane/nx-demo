import * as Tortoise from 'tortoise';
const exec = () => {
  const tortoise = new Tortoise();
  tortoise
    .queue('mono')
    .subscribe((message: string, _: any) => console.log(message));
};

exec();
