export interface User {
  id: string;
  name: string;
  gamingUsername: string;
  avatar: string;
  bio: string;
  games: string[];
  followers: number;
  following: number;
}

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Alex Johnson",
    gamingUsername: "ProGamer123",
    avatar: "https://i.pravatar.cc/150?img=1",
    bio: "Professional gamer | Streamer | Esports enthusiast",
    games: ["League of Legends", "Valorant", "CS:GO"],
    followers: 12500,
    following: 450,
  },
  {
    id: "2",
    name: "Sarah Chen",
    gamingUsername: "PixelQueen",
    avatar: "https://i.pravatar.cc/150?img=2",
    bio: "RPG lover | Speedrunner | Game developer",
    games: ["The Witcher 3", "Dark Souls", "Elden Ring"],
    followers: 8900,
    following: 320,
  },
  {
    id: "3",
    name: "Mike Rodriguez",
    gamingUsername: "FPSKing",
    avatar: "https://i.pravatar.cc/150?img=3",
    bio: "FPS specialist | Tournament player | Coach",
    games: ["Apex Legends", "Overwatch", "Rainbow Six Siege"],
    followers: 15600,
    following: 280,
  },
  {
    id: "4",
    name: "Emma Wilson",
    gamingUsername: "StrategyQueen",
    avatar: "https://i.pravatar.cc/150?img=4",
    bio: "Strategy games expert | Content creator | Community leader",
    games: ["Civilization VI", "Age of Empires", "Total War"],
    followers: 10200,
    following: 390,
  },
  {
    id: "5",
    name: "David Kim",
    gamingUsername: "FightingSpirit",
    avatar: "https://i.pravatar.cc/150?img=5",
    bio: "Fighting game pro | Tournament organizer | Coach",
    games: ["Street Fighter V", "Tekken 7", "Mortal Kombat"],
    followers: 7800,
    following: 210,
  },
];
