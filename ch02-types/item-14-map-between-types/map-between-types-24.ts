function getUserInfo(userId: string) {
    return {
        userId,
        name,
        age,
        height,
        weight,
        favoriteColor
    }
}
// 추론된 반환 타입은 userId: string, name: string; age: number ...